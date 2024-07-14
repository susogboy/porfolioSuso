import React, { useState, useEffect } from 'react'
import moment from 'moment-timezone'

const Timezone = ({ timezone }: any) => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    // Este efecto se ejecuta cuando cambia la prop 'timezone' o cuando el componente se monta.
    const interval = setInterval(() => {
      // Obtener la fecha y hora actual en la zona horaria especificada por 'timezone'
      const now = moment().tz(timezone)
      // Formatear la fecha y hora en el formato deseado
      setDateTime(now.format('dddd, DD MMMM YYYY [a] h:mm:ss A'))
    }, 1000) // Actualizar cada segundo

    // Limpieza: detener el intervalo cuando el componente se desmonta o cuando cambia 'timezone'
    return () => clearInterval(interval)
  }, [timezone]) // El efecto se ejecuta cuando 'timezone' cambia

  return (
    <div>
      <p>{dateTime}</p>
      <p className="text-sm text-gray-500">🌍 {moment.tz(timezone).format('z, Z')} 🇪🇸</p>
    </div>
  )
}

export default Timezone
