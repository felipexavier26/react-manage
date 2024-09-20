import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BackEnd_url from '../../config/BackEnd_url';
import Loanding from '../loading/Loanding';
import './projectEdit.css';


function ProjectEdit({ btnText }) {
  const { id } = useParams();

  const [project, setProject] = useState({
    name: '',
    budget: '',
    category_id: '',
    cost: ''
  });

  const [loadingremove, setLoadingremove] = useState(false);
  const [categories, setCategories] = useState([]);
  const [msg, setMsg] = useState('');
  const [show, setShow] = useState(false);
  const [showservices, setShowServices] = useState(false)

  useEffect(() => {
    BackEnd_url.get('/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.log("Erro ao buscar categorias:", error);
      });
  }, []);

  useEffect(() => {
    BackEnd_url.get(`/project/${id}`)
      .then((response) => {
        console.log(response.data);
        setProject(response.data);
        setLoadingremove(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  function toggle() {
    setShow(!show);
  }

  function toggleServices() {
    setShowServices(!showservices)
  }

  function editPost(e) {
    e.preventDefault();

    if (Number(project.budget) < Number(project.cost)) {
      alert('O orçamento não pode ser menor que o custo!');
      return;
    }

    BackEnd_url.patch(`/project/${id}`, project)
      .then((response) => {
        console.log('Projeto atualizado:', response.data);
        setMsg('Projeto atualizado com sucesso!');
        setTimeout(() => setMsg(''), 6000);
        toggle();
      })
      .catch((error) => {
        console.log('Erro ao atualizar o projeto:', error);
      });
  }
  function createService() {

  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProject({
      ...project,
      [name]: value,
    });
  };

  return (
    <div className="project-detalhs">
      <p className='success-message'>{msg}</p>
      {!loadingremove && <Loanding />}

      {loadingremove && (
        <>
          <div className="container-project-edit">
            <div className="container-button">
              <h2>Projeto: {project.name}</h2>
              <button onClick={toggle} className="btnEdit">
                {!show ? 'Editar projeto' : 'Fechar'}
              </button>
            </div>

            {!show ? (
              <div>
                <p>
                  <span>Categoria:</span> {project.category_id}
                </p>
                <p>
                  <span>Total do Orçamento:</span> R$ {project.budget}
                </p>

              </div>
            ) : (
              <div>
                <form className="form" onSubmit={editPost}>
                  <div className='form_control'>
                    <label htmlFor="">Nome do projeto</label>
                    <input type="text"
                      text="Nome do projeto"
                      name="name"
                      placeholder="Insira o nome do projeto"
                      value={project.name}
                      onChange={handleInputChange} />

                    <label htmlFor="">Orçamento do projeto</label>
                    <input
                      type="number"
                      text="Orçamento do projeto"
                      name="budget"
                      placeholder="Insira o orçamento total"
                      value={project.budget || ''}
                      onChange={handleInputChange} />

                    <label >Selecione a categoria</label>
                    <select
                      name="category_id"
                      value={project.category_id}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Selecione uma opção</option>
                      {categories.length > 0 ? (
                        categories.map((category) => (
                          <option value={category.name} key={category.id}>
                            {category.name}
                          </option>
                        ))
                      ) : (
                        <option disabled>Nenhuma opção disponível</option>
                      )}
                    </select>

                    <button type="submit" className='btnSubmit'>Concluir edição </button>
                  </div>
                </form>
              </div>

            )}
          </div>




        </>
      )}
    </div>
  );
}

export default ProjectEdit;
