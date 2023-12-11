import api from '../plugins/api'

class UsuarioService {
    async getAllUsuarios() {
        const response = await api.get('/usuarios/')
        return response.data
    }
    async saveUsuario(usuario) {
        const response = await api.post('/usuarios/', usuario)
        return response.data
    }
    async deleteUsuario(usuario) {
        const response = await api.delete(`/usuarios/${usuario.id}/`)
        return response.data
    }
}

export default new UsuarioService()