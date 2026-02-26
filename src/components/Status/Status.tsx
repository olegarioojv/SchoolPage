import {
  StatusContainer,
  StatusContent,
  StatusItem,
  StatusNumber,
  StatusSubTitle,
} from "./Status.tyled";

function Status() {
  return (
    <StatusContainer>
      <StatusContent>
        <StatusItem>
          <StatusNumber>15K</StatusNumber>
          <StatusSubTitle>Happy Customers</StatusSubTitle>
        </StatusItem>

        <StatusItem>
          <StatusNumber>150K</StatusNumber>
          <StatusSubTitle>Monthly Visitors</StatusSubTitle>
        </StatusItem>

        <StatusItem>
          <StatusNumber>15</StatusNumber>
          <StatusSubTitle>Countries Worldwide</StatusSubTitle>
        </StatusItem>

        <StatusItem>
          <StatusNumber>100+</StatusNumber>
          <StatusSubTitle>Top Partners</StatusSubTitle>
        </StatusItem>
      </StatusContent>
    </StatusContainer>
  );
}

export default Status;
