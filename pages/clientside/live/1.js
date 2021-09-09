import Link from 'next/link';

const ClientsideLive1 = () => {
  return (
    <div>
      <nav>
        <h2>Client-side transitions, with live regions</h2>
        <ul>
          <li>
            <Link href="/">
              <a>Back to index</a>
            </Link>
          </li>
          <li>
            <Link href="/clientside/live/1">
              <a>Manchester Picadilly</a>
            </Link>
          </li>
          <li>
            <Link href="/clientside/live/2">
              <a>Manchester Victoria</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>Manchester Picadilly</h1>
        <p>Demo page, simulating a departures board for Manchester Picadilly.</p>
        <dl>
          <div>
            <dt>Routing</dt>
            <dd>Client-side</dd>
          </div>
          <div>
            <dt>Live regions</dt>
            <dd>Yes</dd>
          </div>
        </dl>
        <section aria-label="Departures" aria-live="polite" aria-atomic="true">
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

export default ClientsideLive1;
