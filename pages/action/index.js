import Expandable from '../../components/Expandable'
import styles from '../../styles/Action.module.css'

export default function Action(props) {
  const tweetParams = "text=Orlando traffic and transportation can be fixed. Learn about the Orange County Transportation Initiative:&url=https://endorlandotraffic.org"
  return (
    <div className={styles.action}>
      <img src="/graphics/bulb.png" />
      <h3 className={styles.heading}>How Do We Fix Traffic?</h3>
      <p>
        <span className={styles.subheading}>Fewer cars on the road.</span> <br />
        Traffic congestion is at its worst at peak usage. If we can half the amount of cars on the highway during your commute, the drive just got a whole lot easier.
      </p>
      <img src="/graphics/car-red.png" className={styles.car} />
      <p>
        <span className={styles.subheading}>More ways to get around.</span> <br />
        Less people are forced to drive if other
        means of transportation are available. Being able to walk to the grocery store,
        ride a bike to the park, and take a bus to work means less cars on the road, and a better commute for you.
      </p>
      <img src="/graphics/bus-green.png" className={styles.bus} />
      <p>
        <span className={styles.subheading}>To do this, we need better infrastructure.</span> <br />
        Lynx buses should come once every 15 or 30 minutes, not once every one or two hours. In busy areas, buses should be separated from cars, so you don&apos;t get caught behind a bus at a stop. SunRail should serve the evenings weekends, so no one has to deal with I4 traffic. Bike lanes need to be separate from car lanes, so cyclists don&apos;t hold up traffic.
      </p>
      <img src="/graphics/bus-lane.png" className={styles.buslane}/>
      <h3 className={styles.heading}>How You Can Help</h3>
      <p>
        The Orange County Board of County Commissioners is preparing to vote on whether to include the
        {" "}<strong>Orange County Transportation Initiative </strong> on the November 2022 ballot for residents
        to vote on. Here is how you can help make that happen.
      </p>
      <div className={styles.waystohelp}>
        <Expandable title="Take the Survey">
          <p>Orange County is currently running a survey to understand ways residents
          commute and how transportation should be improved.</p>
          <p>This survey is an opportunity to tell Orange County about the importance of
          improved Lynx and Sunrail service, better bike lanes, and pedestrian safety.</p>
          <p className={styles.calltoaction}>Take the Transportation Initiative Survey <a href="https://www.orangecountyfl.net/TrafficTransportation/TransportationInitiative.aspx">here</a>.
          </p>
        </Expandable>
        <Expandable title="Speak to the Board of County Commissioners">
          <p>
            The Board of County Commissioners votes on whether to put the referendum on the November 2022 ballot on <strong>Tuesday, April 26</strong>. Before this vote, there is a <strong>public hearing</strong>.
          </p>
          <p className={styles.calltoaction}>
            You can register to appear before the Board <a href="https://www.orangecountyfl.net/BoardofCommissioners/BoardAppearanceandpubliccomment.aspx">here</a>.
          </p>
          <p style={{textAlign: "center"}}>
            Enter 04/26/2022 for the Request Board Date, and your information.
          </p>
          <p>
            Simply arrive 30 minutes prior to the meeting. If you have not registered to appear by this point,
            you can still fill out a Notice of Intent to Speak form in order to appear before the Board.
          </p>
          <p>
            You will have 2 minutes to speak, but you can simply say &quot;I am present in support of the Orange County Transportation Initiative.&quot; Feel free to speak your mind about traffic and how it can be alleviated with improved bus service, cycling safety, and pedestrian safety.
          </p>
        </Expandable>
        <Expandable title="Contact Your County Representatives">
          <p>
            Getting involved at the county level is vital. Calling or emailing can help. Below is a template you can use in your call or email.
          </p>
          <p className={styles.template}>
            Dear Mayor Demings and Commissioner,<br/><br/>
            The Orange County Transportation Initiative is essential for the future of our county and our city.
            Our population is rising fast, and traffic congestion is getting worse. Infrastructure improvements
            for Orange County that include traffic technology improvements, Lynx and Sunrail service improvements, and
            improvements for pedestrian and cyclist safety are needed now.
            <br />
            <br />
            Thank you, <br />
            {"<Your Name>"}<br />
            {"<Your Address>"}<br />
          </p>
          <p className={styles.calltoaction}>
            You can find which commissioner represents your district <a href="https://www.orangecountyfl.net/BoardofCommissioners.aspx">here</a>.
          </p>
          <p style={{textAlign: "center"}}>
            Enter your street address to find which member of the Board is your representative.
          </p>
          <p className={styles.contactinfo}>
            <span className={styles.commissioner}>
              Orange County Mayor - Jerry L. Demings 
            </span> <br />
            <a href="mayor@ocfl.net">mayor@ocfl.net</a> <br />
            (407) 836-7370
          </p>
          <p className={styles.contactinfo}>
            <span className={styles.commissioner}>
              District 1 - Nicole H. Wilson
            </span> <br />
            <a href="district1@ocfl.net">district1@ocfl.net</a><br />
            (407) 836-7350 <br />
            Twitter: <a href="https://twitter.com/NicoleWilsonD1">@NicoleWilsonD1</a> <br />
          </p>
          <p className={styles.contactinfo}>
            <span className={styles.commissioner}>
              District 2 - Christine Moore
            </span> <br />
            <a href="district2@ocfl.net">district2@ocfl.net</a><br />
            (407) 836-7350 <br />
            Twitter: <a href="https://twitter.com/OCFLDistrict2">@OCFLDistrict2</a> <br />
          </p>
          <p className={styles.contactinfo}>
            <span className={styles.commissioner}>
              District 3 - Mayra Uribe
            </span> <br />
            <a href="district3@ocfl.net">district3@ocfl.net</a><br />
            (407) 836-5140
          </p>
          <p className={styles.contactinfo}>
            <span className={styles.commissioner}>
              District 4 - Maribel Gomez Cordero
            </span> <br />
            <a href="district4@ocfl.net">district4@ocfl.net</a><br />
            (407) 836-7350 <br />
            Twitter: <a href="https://twitter.com/OCFLDistrict4">@OCFLDistrict4</a> <br />
          </p>
          <p className={styles.contactinfo}>
            <span className={styles.commissioner}>
              District 5 - Emily Bonilla
            </span> <br />
            <a href="https://emilybonilla.com/contact-3/">emilybonilla.com/contact-3/</a><br />
            (407) 836-7350 <br />
            Twitter: <a href="https://twitter.com/Comm_Bonilla">@Comm_Bonilla</a> <br />
          </p>
          <p className={styles.contactinfo}>
            <span className={styles.commissioner}>
              District 6 - Victoria P. Siplin
            </span> <br />
            <a href="district6@ocfl.net">district6@ocfl.net</a> <br />
            (407) 836-5860
          </p>
        </Expandable>
        <Expandable title="Raise Awareness for the Orange County Transportation Initiative">
          <p>
            It&apos;s essential that more Orange County residents are aware of the Orange County Transportation Initiative.
          </p>
          <p>Here are some links that you can share with your community:</p>
          <ul className={styles.links}>
            <li>
              <a href="https://www.orangecountyfl.net/TrafficTransportation/TransportationInitiative.aspx">
                OrangeCountyFL.net - Transportation Initiative
              </a>
            </li>
            <li>
              <a href="https://endorlandotraffic.org">
                EndOrlandoTraffic.org
              </a>
            </li>
          </ul>
          <p>
            <a className={styles.tweet} href={"https://twitter.com/intent/tweet?" + tweetParams}>Tweet about EndOrlandoTraffic.org!</a>
          </p>
        </Expandable>
      </div>
    </div>
  )
}
