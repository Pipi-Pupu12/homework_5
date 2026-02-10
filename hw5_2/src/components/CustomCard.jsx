import { Card, Button } from 'antd';

const CustomCard = ({ title, description, price }) => {
  return (
    <Card title={title} style={{ width: 300, marginBottom: '20px' }}>
      <p>{description}</p>
      <p><b>Цена: {price} руб.</b></p>
      <Button type="primary">Купить</Button>
    </Card>
  );
};

export default CustomCard;