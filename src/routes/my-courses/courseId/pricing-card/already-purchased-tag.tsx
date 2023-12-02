import React from "react";

type Props = { purchaseInfo: any };

const AlreadyPurchasedTag = ({ purchaseInfo }: Props) => {
  const purchaseDate = new Date(purchaseInfo.packagePurchasedTime);

  return (
    <p className="py-1 px-2 text-xs bg-[#7E3AF2] text-white rounded-full absolute -top-2 right-2">
      Purchased by you on {purchaseDate.getDate()}-{purchaseDate.getMonth() + 1}
      -{purchaseDate.getFullYear()}
    </p>
  );
};

export default AlreadyPurchasedTag;
