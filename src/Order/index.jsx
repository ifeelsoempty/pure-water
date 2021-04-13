import { OrderCustomerForm } from './OrderCustomerForm'
import { OrderPreview } from './OrderPreview'

export const Order = () => {
  return (
    <div className="order">
      <OrderPreview />
      <div className="order-form">
        <OrderCustomerForm />
        <div className="separate"></div>
      </div>
    </div>
  );
}