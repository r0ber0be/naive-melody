const today = new Date();

// Obtém o dia, mês e ano
const day = today.getDate();
const year = today.getFullYear();

// Lista de nome dos meses
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Obtém o nome do mês atual
const month = monthNames[today.getMonth()];

// Configurar a data para "27, Sep, 2024"
const formattedDate = `${day}, ${month}, ${year}`;

export default formattedDate;