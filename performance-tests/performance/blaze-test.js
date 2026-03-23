import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  scenarios: {
    carga: {
      executor: 'constant-arrival-rate',
      rate: 250, // 250 requisições por segundo
      timeUnit: '1s',
      duration: '1m',
      preAllocatedVUs: 100,
      maxVUs: 500,
    },
  },

  thresholds: {
    http_req_duration: ['p(90)<2000'], // p90 < 2s
    http_req_failed: ['rate<0.01'],    // <1% erro
  },
};

export default function () {
  let res = http.get('http://www.blazedemo.com');

  check(res, {
    'status 200': (r) => r.status === 200,
  });

  sleep(1);
}