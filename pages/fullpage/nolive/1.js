import Link from "next/link";

const FullpageNolive1 = () => {
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
        <h1>Manchester Picadilly</h1>
        <p>Demo page, simulating a departures board for Manchester Picadilly.</p>
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
            <li>Train to York in 4 minutes</li>
            <li>Train to Newcastle in 12 minutes</li>
            <li>Train to Cardiff in 34 minutes</li>
            <li>Train to Birmingham in 56 minutes</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default FullpageNolive1;
