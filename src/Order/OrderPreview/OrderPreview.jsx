import preview from '../../assets/img/order-preview.png'

export const OrderPreview = () => {
  return (
    <div className="order-preview">
      <div className="order-preview__img">
        <img src={preview} alt=""/>
      </div>
      <h1 className="order-preview__title">Чистая Вода</h1>
      <div className="order-preview__desc">
        Питьевая вода, предназначенная для ежедневного потребления, идеально подходит для кулеров. 
        Закажите доставку воды и мы привезем её на дом или в офис.
      </div>
    </div>
  )
}