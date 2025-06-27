import EquippingContent from './EquippingContent'

export default function Equipping() {
  return (
    <div className="flex w-1/3 flex-col justify-between px-3 pb-4 pt-6">
      <div className="title font-semibold">
        <span className="text-xl">準備中の番号</span>
        <span className="text-xs"> Preparing </span>
      </div>
      <div className="content flex-1">
        <EquippingContent />
      </div>
      <div className="total flex h-8 items-center justify-center rounded-md bg-custom-total text-custom-total-foreground">
        <p className="flex items-center rounded-sm text-base font-semibold">
          お待ちの人数
          <span className="mx-1 rounded-sm bg-custom-total-subtle px-2 text-xl leading-tight text-custom-total">
            31
          </span>
          名
        </p>
      </div>
    </div>
  )
}
