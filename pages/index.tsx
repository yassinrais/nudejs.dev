import Head from 'next/head'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {

  return (
    <main>
      <Head>
        <title>Nude.js</title>
        <script defer data-domain="nudejs.dev" src="https://plausible.io/js/plausible.js"></script>
      </Head>

      <h1 className="hidden">Nudejs.dev</h1>
      <div className="container">
        <a className="prank shake" href="https://github.com/yassinrais/">
          <img className="prank" src="https://avatars.githubusercontent.com/u/25354731?v=4" alt="NudeJs Logo" />
          <h1 className="gelatine">😈 NoooNooo !</h1>
        </a>
        <div className="nudejs">
          <h1>👇👇👇 👇👇👇</h1>
          <img src="/nudejs.png" alt="NudeJs Logo" />
        </div>
      </div>
    </main>
  )
}

export default IndexPage
