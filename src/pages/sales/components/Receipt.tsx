import React from 'react';

const Receipt: React.ElementType = () => (
  <>
    <p>Logo</p>
    <p>
      Tienda para mascotas
      <br />
      Régimen simplificado
      <br />
      NIT 1038770891-8
      <br />
      Calle 79A # 52 A 87
      <br />
      Teléfono: 3205644443
      <br />
      Itaguí - Centro de la moda
      <br />
      <br />
      Fecha: 02 de Agosto de 2019
    </p>
    <table>
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Descripción</th>
          <th className="priceHead">Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1x&nbsp;</td>
          <td className="mayus">
            Descripción del producto
          </td>
          <td className="priceColumn">
            $1.000
          </td>
        </tr>
      </tbody>
    </table>
    <br />
    <p>
      Subtotal: $1.000
      <br />
      Ahorro: $0
    </p>
    <p><strong>TOTAL: $1.000</strong></p>
    <p>
      Efectivo: $2.000
      <br />
      Cambio: $1.000
    </p>
    <br />
    <p>
      Gracias por su compra
      <br />
      Visítanos en WWW.COLMILLITOS.PET
    </p>
  </>
);

export default Receipt;