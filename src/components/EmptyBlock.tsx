import styled from "styled-components";
import plus from "../assets/plus.svg";

const Container = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Image = styled.img`
  margin-right: 32px;
`;

const Text = styled.p`
  width: 315px;
  line-height: 140%;
  color: #777777;
`;

const EmptyBlock = () => (
  <Container>
    <Image src={plus} />
    <Text>Для добавления новой организации введите ее название, ИНН или адрес.</Text>
  </Container>
);

export default EmptyBlock;
