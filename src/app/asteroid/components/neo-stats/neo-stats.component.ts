import { Component, Input } from '@angular/core';

// Interfaces
import { NeoStats } from '../../models/neo-stats.interface';

@Component({
  selector: 'app-neo-stats',
  styleUrls: ['neo-stats.component.scss'],
  template: `
<div class="columns neo-source-columns">
  <div class="column is-4">
    <small>
      {{ neoStats.source }}
    </small>
  </div>
</div>
<nav class="level neo-stats-level">
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">
        Near Earth Objects
      </p>
      <p class="title">
        {{ neoStats.near_earth_object_count }}
      </p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">
        Close Approaches
      </p>
      <p class="title">
        {{ neoStats.close_approach_count }}
      </p>
    </div>
  </div>
  <div class="level-item has-text-centered">
    <div>
      <p class="heading">
        Last Updated
      </p>
      <p class="title">
        {{ neoStats.last_updated }}
      </p>
    </div>
  </div>
</nav>
`
})

export class NeoStatsComponent {
  @Input() neoStats: NeoStats;
}
