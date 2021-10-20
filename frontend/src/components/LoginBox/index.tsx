import { useContext} from 'react';
import { AuthContext } from '../../contexts/auth';

import { VscGithubInverted } from 'react-icons/vsc';
import sealIcon from '../../assets/seal.svg';
import styles from './styles.module.scss';

export function LoginBox() {
  const {signInUrl} = useContext(AuthContext);
  return(
    <div className={styles.loginBoxWrapper}>
      <img src={sealIcon} className={styles.sealIcon}/>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={signInUrl} className={styles.signInWithGithub}>
        <VscGithubInverted size="20" />
        Entrar com Github
      </a>
    </div>
  );
}