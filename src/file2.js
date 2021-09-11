function alertMessage(p_sMessage) {
    p_sMessage = String(p_sMessage);
    
    alert(`Переданное сообщение: ${p_sMessage}`);
}

export default alertMessage;