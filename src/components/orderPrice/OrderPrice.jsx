const OrderPrice = ({ price }) => {
  return (
    <div className="flex-col w-full bg-white p-7">
      <div>
        <p className="font-bold text-2xl mb-5">결제 금액</p>
      </div>
      <div className="flex mb-3 justify-between text-lg text-stone-400">
        <p>상품 금액</p>
        <p>{price?.toLocaleString()}원</p>
      </div>
      <div className="flex mb-3 justify-between text-lg text-stone-400">
        <p>할인 금액</p>
        <p>0</p>
      </div>
      <div className="flex mb-3 justify-between text-lg text-stone-400">
        <p>총 결제 금액</p>
        <p>{price?.toLocaleString()}원</p>
      </div>
    </div>
  );
};

export default OrderPrice;
