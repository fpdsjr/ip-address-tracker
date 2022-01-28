import { ContentSectionStyled } from "../styledComponents/ContentSection.styled";

function ContentSection(props) {
  const { ipGeolocation } = props;
  const { ip, isp, location } = ipGeolocation;

  return (
    <ContentSectionStyled>
      <ul>
        <div>
          <strong>IP ADDRESS</strong>
          <li>{ip}</li>
        </div>
      </ul>
      <ul>
        <div className="top position-location">
          <strong>LOCATION</strong>
          <li className="before up">
            {ipGeolocation.length !== 0
              ? `${location.city}, ${location.region}, ${location.country}`
              : ""}
          </li>
        </div>
      </ul>
      <ul>
        <div className="top position-timezone">
          <strong>TIMEZONE</strong>
          <li className="before">
            {ipGeolocation.length !== 0 ? `UTC${location.timezone}` : ""}
          </li>
        </div>
      </ul>
      <ul>
        <div className="top position-isp">
          <strong>ISP</strong>
          <li className="before">{isp}</li>
        </div>
      </ul>
    </ContentSectionStyled>
  );
}

export default ContentSection;
