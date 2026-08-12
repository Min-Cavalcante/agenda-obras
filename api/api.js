// api.js - Configuração para integração futura com n8n

const API_CONFIG = {
  // Substitua pela URL do webhook do n8n quando configurar
  N8N_WEBHOOK_URL: 'https://n8n.gaussenergia.com.br/webhook-test/gauss-obras',
  
  // Headers padrão
  headers: {
    'Content-Type': 'application/json',
  }
};

/**
 * Busca todas as obras do Google Sheets via n8n
 */
async function fetchProjects() {
  try {
    const response = await fetch(`${API_CONFIG.N8N_WEBHOOK_URL}/projects`, {
      method: 'GET',
      headers: API_CONFIG.headers
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao carregar projetos:', error);
    throw error;
  }
}

/**
 * Busca projeto específico por ID
 */
async function fetchProjectById(projectId) {
  try {
    const response = await fetch(`${API_CONFIG.N8N_WEBHOOK_URL}/projects/${projectId}`, {
      method: 'GET',
      headers: API_CONFIG.headers
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Erro ao carregar projeto ${projectId}:`, error);
    throw error;
  }
}

export { fetchProjects, fetchProjectById };
