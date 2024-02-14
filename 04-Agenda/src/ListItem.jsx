const ListItem = ({nombre, direccion, telefono, correo}) => {
    return (
        <li><b>Nombre:</b> {nombre}
        <ul>
         <li><b>Dirección:</b> {direccion}</li>
         <li><b>Teléfono:</b> {telefono}</li>
         <li><b>Correo:</b> {correo}</li>
         <br />
        </ul>
        </li>
    )
}

export default ListItem