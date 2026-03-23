import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  scenarios: {
    carga: {
      executor: 'constant-arrival-rate',
      rate: 250,
      timeUnit: '1s',
      duration: '1m',
      preAllocatedVUs: 100,
      maxVUs: 500,
    },
    pico: {
      executor: 'ramping-arrival-rate',
      startRate: 50,
      timeUnit: '1s',
      stages: [
        { target: 250, duration: '30s' },
        { target: 400, duration: '30s' },
      ],
      preAllocatedVUs: 100,
      maxVUs: 600,
    }
  },
  thresholds: {
    http_req_duration: ['p(90)<2000'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  let res = http.get('http://www.blazedemo.com');
  check(res, { 'status 200': (r) => r.status === 200 });
  sleep(1);
}
