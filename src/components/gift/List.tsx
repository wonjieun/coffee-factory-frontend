import { useRecoilValue } from 'recoil';
import { giftList } from 'recoil/gift';

const List = () => {
  const gift = useRecoilValue(giftList);

  return (
    <div>
      <p>{gift[0].name}</p>
    </div>
  );
};

export default List;
