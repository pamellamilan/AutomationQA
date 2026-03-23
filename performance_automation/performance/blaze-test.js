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
  },
  thresholds: {
    http_req_duration: ['p(90)<2000'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const res = http.get('http://www.blazedemo.com');

  check(res, {
    'status 200': (r) => r.status === 200,
  });

  sleep(1);
}
