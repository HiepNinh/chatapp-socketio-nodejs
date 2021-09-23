export const setSocket = (socket) => {
    return {
        type: "INIT_SOCKET",
        payload: socket
    }
}