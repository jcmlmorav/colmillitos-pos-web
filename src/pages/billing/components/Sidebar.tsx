import React from 'react';
import { Button, Descriptions, Divider, InputNumber, Radio } from 'antd';
import Styles from './sidebar.module.scss';

const Sidebar: React.FC = () => {
  return (
    <React.Fragment>
      <Divider>Facturación</Divider>
      <Descriptions layout="horizontal" bordered column={1}>
        <Descriptions.Item label="SUBTOTAL">
          $800.000
        </Descriptions.Item>
        <Descriptions.Item label="BONO">
          <InputNumber
            defaultValue={10}
            min={0}
            max={100}
            formatter={value => `${value}%`}
          />
        </Descriptions.Item>
        <Descriptions.Item label="DESCUENTO">
          $80.000
        </Descriptions.Item>
        <Descriptions.Item label="IVA">
          $160.000
        </Descriptions.Item>
        <Descriptions.Item label="TOTAL">
          <strong>$720.000</strong>
        </Descriptions.Item>
      </Descriptions>
      <Divider>Método de pago</Divider>
      <Radio.Group name="payment" defaultValue="cash">
        <Radio value="cash" /> Efectivo
        <br />
        <Radio value="transfer" /> Transferencia
        <br />
        <Radio value="dataphone" /> Datafono
        <br />
        <Radio value="online" /> Online
        <br />
        <Radio value="debt" /> Deuda
      </Radio.Group>
      <Divider>Pago</Divider>
      <Descriptions layout="horizontal" bordered column={1}>
        <Descriptions.Item label="MONTO">
          <InputNumber
            defaultValue={100000}
            min={0}
            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          />
        </Descriptions.Item>
        <Descriptions.Item label="CAMBIO">
          $12,500
        </Descriptions.Item>
      </Descriptions>
      <div className={Styles.buttonContainer}>
        <Button type="primary" block>
          Finalizar compra
        </Button>
        <Button block>
          Cancelar compra
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
