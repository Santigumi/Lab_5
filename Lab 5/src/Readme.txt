Lab 5

1.Los productos son inyectados desde el local Storage, la información llega al local Storage desde el App state
Posible error: si la conexión es lenta el array quedará vacío así que no se mostratría nada.

2.Mis productos favoritos son guardados en el App state y en el local Storage, sin embargo, los inyecto desde
el App state, no desde el Local Storage.
Error: Al reiniciar la página y dar click en otro elemento favorito, los anteriores se eliminan, esto debido
a que actualizo mi local storage en cada reinicio, no encontré la manera de concatenar la antigua información
con la nueva

