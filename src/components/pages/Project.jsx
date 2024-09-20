import React, { useState, useEffect } from 'react';
import './project.css';
import BackEnd_url from '../../config/BackEnd_url';
import Loanding from '../loading/Loanding';
import { FiEdit2 } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function Project() {
    const [projects, setProjects] = useState([]);
    const [loadingremove, setLoadingremove] = useState(false);
    const [msg, setMsg] = useState('');
    const [show, setShow] = useState(false);
    const [projectToDelete, setProjectToDelete] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setProjectToDelete(id);
        setShow(true);
    };

    useEffect(() => {
        BackEnd_url.get('/project')
            .then(response => {
                console.log(response.data);
                setProjects(response.data);
                setLoadingremove(true);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    function confirmDelete() {
        if (projectToDelete !== null) {
            BackEnd_url.delete(`/project/${projectToDelete}`)
                .then(response => {
                    console.log(response.data);
                    setProjects(projects.filter((projeto) => projeto.id !== projectToDelete));
                    setMsg('Projeto deletado com sucesso');
                    setTimeout(() => setMsg(''), 6000);
                })
                .catch(error => {
                    console.log(error);
                });
            handleClose();
        }
    }

    return (
        <div className='container-project'>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body className='msgTitle'>
                    <Modal.Title>Confirmar Exclusão</Modal.Title>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={confirmDelete}>
                        Confirmar
                    </Button>
                </Modal.Footer>
            </Modal>

            {!loadingremove && <Loanding />}

            {loadingremove && (
                <>
                    <h2>Lista de Projetos</h2>
                    <table className="project-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th>Categoria</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.length > 0 ? (
                                projects.map((project) => (
                                    <tr key={project.id}>
                                        <td>{project.id}</td>
                                        <td>{project.name}</td>
                                        <td>R$ {project.budget}</td>
                                        <td>{project.category_id}</td>
                                        <th>
                                            <MdDeleteForever className='delete' onClick={() => handleShow(project.id)} />

                                            <Link to={`/projectedit/${project.id}`} >
                                                - <FiEdit2 className='edit' />
                                            </Link>
                                         

                                        </th>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5">Nenhum projeto encontrado.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <p className='success-message'>{msg}</p>
                </>
            )}
        </div>
    );
}

export default Project;
