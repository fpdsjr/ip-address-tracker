import { ContentSectionStyled } from "../styledComponents/ContentSection.styled";

function ContentSection() {
  return (
    <ContentSectionStyled>
      <ul>
        <div>
          <strong>IP ADDRESS</strong>
          <li>0.0.0.0.0</li>
        </div>
      </ul>
      <ul>
        <div className="top position-location">
          <strong>LOCATION</strong>
          <li className="before up">Broonklyn, NY 10001</li>
        </div>
      </ul>
      <ul>
        <div className="top position-timezone">
          <strong>TIMEZONE</strong>
          <li className="before">UTC-05:00</li>
        </div>
      </ul>
      <ul>
        <div className="top position-isp">
          <strong>ISP</strong>
          <li className="before">SpaceX Starlink</li>
        </div>
      </ul>
    </ContentSectionStyled>
  );
}

export default ContentSection;
