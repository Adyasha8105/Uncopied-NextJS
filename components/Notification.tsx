import { store } from 'react-notifications-component';

export function notify(notification) {
    const notificationBox = {
        title: notification.title || " ",
        message: " ",
        type: notification.type,
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          pauseOnHover: true,
          onScreen: true
        }
      }
    return store.addNotification(notificationBox);
}
