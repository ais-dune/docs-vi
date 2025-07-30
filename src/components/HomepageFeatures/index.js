import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from '@shared/components/HomepageFeatures/styles.module.css';

const FeatureList = [
  {
    title: 'Products',
    description: (
      <>
        제품이나 서비스에 따라 문서를 체계적으로 분류하고 정리합니다.
        사용자는 각 상품의 특징과 활용법을 명확히 파악할 수 있습니다.
      </>
    ),
  },
  {
    title: 'What\'s New',
    description: (
      <>
        기능 업데이트, 개선 사항, 변경 이력을 릴리스 노트로 관리합니다.
        명확한 버전 관리로 제품 변화의 흐름을 쉽게 이해할 수 있습니다.
      </>
    ),
  },
  {
    title: 'Blog',
    description: (
      <>
        기술적 고민과 구현 사례를 블로그로 정리합니다.
        문서 외적인 노하우와 인사이트도 함께 담았습니다.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

// 현재 css는 공유 리소스에서 받아오도록 설정
