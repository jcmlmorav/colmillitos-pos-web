import React from 'react';
import { Paragraph, TableWrapper } from './styles';

const Receipt: React.ElementType = () => (
  <>
    <Paragraph>Logo</Paragraph>
    <Paragraph>
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
    </Paragraph>
    <TableWrapper>
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
    </TableWrapper>
    <br />
    <Paragraph>
      Subtotal: $1.000
      <br />
      Ahorro: $0
    </Paragraph>
    <Paragraph><strong>TOTAL: $1.000</strong></Paragraph>
    <Paragraph>
      Efectivo: $2.000
      <br />
      Cambio: $1.000
    </Paragraph>
    <br />
    <Paragraph>
      Gracias por su compra
      <br />
      Visítanos en WWW.COLMILLITOS.PET
    </Paragraph>
  </>
);

export default Receipt;