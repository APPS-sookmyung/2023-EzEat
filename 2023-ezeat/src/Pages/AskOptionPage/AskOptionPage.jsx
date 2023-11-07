import * as S from "./AskOptionPage.style";
import { Link } from "react-router-dom";

function AskOptionPage() {
  return (
    <S.Container>
      <S.Title>
        {" "}
        어떤 걸 기준으로 <br />
        정할까요?
      </S.Title>

      <S.Options>
        <S.Selection>
          <Link to="/answer1">
            <S.OptionImg src="/images/destination.png"></S.OptionImg>
          </Link>
          <S.OptionCaption>
            가까운 곳에서 <br />
            먹고싶어요!
          </S.OptionCaption>
        </S.Selection>

        <S.Selection>
          <Link to="/answer2">
            <S.OptionImg src="/images/cooking.png"></S.OptionImg>
          </Link>
          <S.OptionCaption>
            원하는 종류의 <br />
            음식이 있어요!
          </S.OptionCaption>
        </S.Selection>
      </S.Options>
      <S.NextPage src="/images/nextpage.png"></S.NextPage>
    </S.Container>
  );
}
export default AskOptionPage;
