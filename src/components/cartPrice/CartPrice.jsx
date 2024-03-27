

const CartPrice = () => {
  return (
    <div className="flex-col w-full bg-white p-7">
      <div>
        <p className="font-bold text-2xl mb-5"
        >결제 금액</p>
      </div>
      <div className="flex mb-3 justify-between text-lg text-stone-400">
        <p>상품 금액</p>
        <p>1,500,000</p>
      </div>
      <div className="flex mb-3 justify-between text-lg text-stone-400">
        <p >할인 금액</p>
        <p>75,000</p>
      </div>
      <div className="flex mb-3 justify-between text-lg text-stone-400">
        <p>총 결제 금액</p>
        <p>1,425,000</p>
      </div>
    </div>
  )
}

export default CartPrice