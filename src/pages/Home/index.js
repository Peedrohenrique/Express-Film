import { useEffect, useState } from "react";
import Api from "../../services/api";

export default function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() =>{
    async function loadFilmes(){
      const response = await Api.get('r-api/?api=filmes')
      //console.log(response.data);
      setFilmes(response.data);
    }

    loadFilmes();

  }, []);

    return (
      <div className="container">
        <div className="lista-filmes">
          {filmes.map((filme) =>{
            return (
              <article key={filme.id}>
                <strong> {filme.id} </strong>
              </article>
            )
          })}
        </div>
      </div>
    )
  }