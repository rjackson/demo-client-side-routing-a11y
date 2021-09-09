import Link from "next/link";

const FullpageNolive2 = () => {
  return (
    <div>
      <nav>
        <h2>Full page transitions, no live regions</h2>
        <ul>
          <li>
            <Link href="/">
              <a>Back to index</a>
            </Link>
          </li>
          <li>
            <a href="/fullpage/nolive/1">Manchester Picadilly</a>
          </li>
          <li>
            <a href="/fullpage/nolive/2">Manchester Victoria</a>
          </li>
        </ul>
      </nav>
      <main>
        <h1>Manchester Victoria</h1>
        <p>Demo page, simulating a departures board for Manchester Victoria.</p>
        <dl>
          <div>
            <dt>Routing</dt>
            <dd>Full page reload</dd>
          </div>
          <div>
            <dt>Live regions</dt>
            <dd>No</dd>
          </div>
        </dl>
        <section aria-label="Departures">
          <ul>
            <li>Train to Bristol in 9 minutes</li>
            <li>Train to Liverpool in 14 minutes</li>
            <li>Train to Stockport in 25 minutes</li>
            <li>Train to Sheffield in 43 minutes</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default FullpageNolive2;
