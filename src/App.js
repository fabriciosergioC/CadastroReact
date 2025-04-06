import React, { useState } from 'react';
import './App.css';

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    nome: '',
    idade: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.nome && formData.idade) {
      setUsuarios([...usuarios, {...formData, id: Date.now()}]);
      setFormData({ name: '', nome: '', idade: '' });
    }
  };

  const handleDelete = (id) => {
    setUsuarios(usuarios.filter(user => user.id !== id));
  };

  return (
    <div className="app">
      <header>
        <h1>React App</h1>
        <div className="address-bar">localhost:3000</div>
      </header>

      <div className="sidebar">
       
      </div>

      <div className="main-content">
        <h2>Ola</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Nome</label>
            <input 
              type="text" 
              name="nome" 
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Idade</label>
            <input 
              type="number" 
              name="idade" 
              value={formData.idade}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit">Cadastrar</button>
        </form>

        <div className="usuarios-cadastrados">
          <h3>Usuários Cadastrados</h3>
          {usuarios.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Nome</th>
                  <th>Idade</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.nome}</td>
                    <td>{user.idade}</td>
                    <td>
                      <button 
                        onClick={() => handleDelete(user.id)}
                        className="delete-button"
                      >
                        Deletar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Nenhum usuário cadastrado ainda.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;