import { FC } from 'react'
import { Root } from './styled'

type TermsPageProps = {
  className?: string
}

export const TermsPage: FC<TermsPageProps> = ({ className }) => {
  return (
    <Root className={className} style={{ padding: 20 }}>
      <h1>서비스 이용약관</h1>

      <section className="terms-section">
        <h2>1. 목적</h2>
        <p>
          본 약관은 공지알림e 서비스(이하 &quot;서비스&quot;)를 이용함에 있어 서비스 제공자와 이용자의 권리, 의무 및 책임
          사항을 규정함을 목적으로 합니다.
        </p>
      </section>

      <section className="terms-section">
        <h2>2. 정의</h2>
        <p>
          1) &quot;서비스&quot;란 공알공알이 제공하는 맞춤형 공지 알림 플랫폼을 의미합니다.
          <br />
          2) &quot;이용자&quot;란 본 서비스를 이용하는 개인 또는 단체를 의미합니다.
        </p>
      </section>

      <section className="terms-section">
        <h2>3. 이용계약의 성립</h2>
        <p>
          이용자가 서비스에 가입함으로써 본 약관에 동의한 것으로 간주합니다. 가입 절차는 서비스 제공자가 제시하는 방식에
          따릅니다.
        </p>
      </section>

      <section className="terms-section">
        <h2>4. 서비스 이용</h2>
        <p>
          이용자는 서비스 제공자가 정한 절차에 따라 서비스를 이용할 수 있으며, 설정된 필터에 따라 맞춤형 공지사항을
          제공합니다.
        </p>
      </section>

      <section className="terms-section">
        <h2>5. 이용자의 의무</h2>
        <p>이용자는 다음 행위를 해서는 안 됩니다:</p>
        <ul>
          <li>타인의 정보를 도용하거나 허위 정보를 등록하는 행위</li>
          <li>서비스 운영을 방해하거나 서비스 제공자의 명예를 훼손하는 행위</li>
          <li>기타 법령에 위반되는 행위</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>6. 서비스 제공자의 권리</h2>
        <p>서비스 제공자는 다음 사항을 수행할 권리가 있습니다:</p>
        <ul>
          <li>서비스 개선 및 업데이트를 위한 기술적 변경</li>
          <li>이용약관 위반 시 서비스 이용 제한</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>7. 면책 조항</h2>
        <p>
          서비스는 제공된 정보를 기반으로 맞춤형 알림을 제공하며, 공지사항의 정확성이나 적시성에 대해 보장하지 않습니다.
        </p>
      </section>

      <section className="terms-section">
        <h2>8. 기타</h2>
        <p>본 약관은 관련 법령에 따라 변경될 수 있으며, 변경된 약관은 사전에 공지됩니다.</p>
      </section>
    </Root>
  )
}
