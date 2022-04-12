import styles from '../../styles/About.module.css'

export default function About(props) {
  return (
    <div className={styles.about}>
      <p>
        EndOrlandoTraffic.org supports the improvement of transportation infrastructure,
        including traffic reduction measures, pedestrian and cyclist safety improvements,
        and improved Lynx and Sunrail service.
      </p>
      EndOrlandoTraffic.org is not affiliated with the City of Orlando or Orange County.
    </div>
  )
}
