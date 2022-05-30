import { useCallback, useState } from 'react';
import { Content, Wrraper, WrraperAddress, WrraperInput } from './styles';

import searchIcon from '../../assets/searchIcon.svg';
import api from '../../services/api';
import { cpfMask } from '../../utils/masks';

export interface Result {
  status?: number;
  code?: string;
  state?: string;
  city?: string;
  district?: string;
  address?: string;
  message?: string;
}

export function Home() {
  const [cep, setCep] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState<Result>();
  const [isFetching, setIsFetching] = useState(false);

  const handleSearchAddress = useCallback(async () => {
    setIsFetching(true);
    setError('');
    setResult({});
    await api
      .get(`http://localhost:3333/cep/search-address?cep=${cep}`)
      .then(response => setResult(response.data))
      .catch(err => setError(err.response.data.message))
      .finally(() => setIsFetching(false));
  }, [cep]);

  return (
    <Wrraper>
      <Content>
        <h1>Buscar Endereço!</h1>
        <p>Digite o CEP abaixo para buscar, por favor.</p>
        <WrraperInput>
          <form>
            <input
              type="text"
              maxLength={9}
              placeholder="Digite o CEP!"
              value={cep}
              onChange={event => setCep(cpfMask(event.target.value))}
            />
            <button
              type="submit"
              onClick={event => [event.preventDefault(), handleSearchAddress()]}
            >
              <img src={searchIcon} alt="search" />
            </button>
          </form>
        </WrraperInput>
        <WrraperAddress>
          {isFetching && <p>Carregando...</p>}

          {!isFetching && result && result.status === 200 ? (
            <>
              <p>Endereço: {result.address}</p>
              <p>Estado: {result.state}</p>
              <p>Cidade: {result.city}</p>
              <p>Município: {result.district}</p>
              <p>Cep: {result.code}</p>
            </>
          ) : (
            <p>{result?.message || error}</p>
          )}

          {/* <p>{error}</p> */}
        </WrraperAddress>
      </Content>
    </Wrraper>
  );
}
