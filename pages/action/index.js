import Expandable from '../../components/Expandable'
import styles from '../../styles/Action.module.css'

export default function Action(props) {

  return (
    <div className={styles.action}>
      <p>
        Originally announced at the 2019 State of the County by Mayor Demings, the current plan calls for putting the proposed penny sales tax on the November 2022 ballot for Orange County residents to decide, pending a vote by the Board of County Commissioners. 
      </p>
      <h3 className={styles.subheading}>Ways You Can Help</h3>
      <div className={styles.waystohelp}>
        <Expandable title="Speak to the Board of County Commissioners">
          <p>
            The Board of County Commissioners votes on whether to put the referendum on the November 2022 ballot on <strong>Tuesday, April 26</strong>. Before this vote, there is a <strong>public hearing</strong>.
          </p>
          <p className={styles.appear}>
            You can register to appear before the Board <a href="https://www.orangecountyfl.net/BoardofCommissioners/BoardAppearanceandpubliccomment.aspx">HERE</a>.
          </p>
          <p style={{textAlign: "center"}}>
            Enter 04/26/2022 for the Request Board Date, and your information.
          </p>
          <p>
            Simply arrive 30 minutes prior to the meeting. If you have not registered to appear by this point,
            you can still fill out a Notice of Intent to Speak form in order to appear before the Board.
          </p>
          <p>
            You will have 2 minutes to speak, but you can simply say "I am present in support of the Orange County Transportation Initiative." Feel free to speak your mind about traffic and how it can be alleviated with improved bus service, cycling safety, and pedestrian safety.
          </p>
        </Expandable>
        <Expandable title="Email Your County Representatives">
          <p>blah</p>
        </Expandable>
      </div>
    </div>
  )
}
