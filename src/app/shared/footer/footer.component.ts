import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
<footer class="footer">
  <div class="container">
    <div class="content has-text-centered is-info">
      <p>
        <strong>Astronomania</strong> by <a href="https://www.alex-miller.co">Alex Miller</a>.
      </p>
      <p>
        It's open source, so contribute!
        <a class="icon" href="https://github.com/apmiller108/astronomania">
          <i class="fa fa-github"></i>
        </a>
      </p>
    </div>
  </div>
</footer>
`
})

export class FooterComponent {}
