export const site = {
  operator: '昇海斗',
  operatorAddressDisclosure: '',
  accountDeletion: 'アプリの「マイページ」から「プロフィール」を開くと、画面下部でアカウントの削除手続きができます。手続き後、そのアカウントに紐づくすべてのデータを速やかに削除します。',
  supportVerified: false,
  supportEmail: 'tape.learning.app@outlook.com',
  supportForm: '',
  // Set only after checking actual data practices and completing the policy.
  privacyFinal: false,
  effectiveDate: '2026年11月20日',
};
export const path = (page = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${page}`;
