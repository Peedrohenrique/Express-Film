import { useEffect, useState } from "react";
import "./filme-info.css";
import { useParams } from "react-router-dom";
import Api from "../../services/api";

export default function Filme() {
  const { id } = useParams();
  const [history, setHistory] = useState();
  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      const response = await Api.get(`r-api/?api=filmes/${id}`);
      if(response.data.length === 0){
          //Tentou acessar com um ID que não existe, navego ele para home!
          history.replace('/');
          return;
      }
      setFilme(response.data);
      setLoading(false);
    }

    loadFilme();
    return() => {
        console.log('COMPONETE DESMONTADO')
    }
  }, [history, id]);

  if(loading){
      return(
          <div className="filme-info">
              <h1>Carregando seu filme...</h1>
          </div>
      )
  }

  return (
    <div className="filme-info">
      <h1>{filme.nome}</h1>
    </div>
  );
};
