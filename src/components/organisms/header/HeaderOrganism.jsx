export default function HeaderOrganism() {
  return (
    <header>
      <div id="header__logo">
        <img className="logo" src="/assets/img/logo.svg" alt="Sync's logo" />
      </div>
      <div id="header__sections">
        <nav id="header__navbar">
          <ul>
            <li>
              <a href="#description">Description</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#screens">Screens</a>
            </li>
            <li id="navbar__extra">
              <a href="#extra">Extra</a>
              <img src="/assets/img/down-arrow.png" alt="Section extra" />
              <ul id="extra__sections">
                <li id="#extra__article">
                  <a href="article.html">Article details</a>
                </li>
                <li id="#extra__terms">
                  <a href="article.html">Terms conditions</a>
                </li>
                <li id="#extra__policy">
                  <a href="policy.html">Privacy policy</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <a href="https://factoriaf5.org/">
          <button id="header__button">Download</button>
        </a>
      </div>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"
          />
        </svg>

        <svg
          data-onclick="this.parentElement.blur()"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926L224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512L166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"
          />
        </svg>
      </button>
    </header>
  );
}
