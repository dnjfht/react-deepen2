// ESLint 설정 파일에서 module.exports = {...} 구문을 쓸 때 CommonJS 문법이라,
// .eslintrc.cjs로 확장자를 줘서 “이 파일은 CommonJS 모듈”임을 명시

module.exports = {
  env: {
    browser: true, // 브라우저 전역 변수(window, document 등) 인식
    es2021: true, // ES2021(ES12) 문법 및 전역 변수 허용
  },
  extends: [
    // 미리 만들어진 규칙 셋을 확장
    "eslint:recommended", // ESLint가 기본으로 권장하는 규칙
    "plugin:react/recommended", // React 플러그인이 권장하는 React 관련 규칙
    "plugin:react-hooks/recommended", // React Hooks 사용 시 권장 규칙
    "plugin:prettier/recommended", // Prettier와 충돌나는 ESLint 규칙 비활성화 + Prettier 오류를 ESLint 오류로 처리
  ],
  plugins: ["react", "react-hooks", "prettier"],
  // 사용할 ESLint 플러그인 명시
  // React 관련 규칙과 Hooks 관련 규칙, 그리고 Prettier 통합
  rules: {
    // 커스텀 규칙 설정
    "prettier/prettier": "error", // Prettier 포맷팅 위반 시 ESLint 오류로 처리
    "react/react-in-jsx-scope": "off", // React 17 이상부터는 import React 필요 없으므로 해당 규칙 해제
    "react/prop-types": "off", // PropTypes 검사 비활성화 (보통 TypeScript 사용 시)
  },
  parserOptions: {
    ecmaVersion: "latest", // 최신 ECMAScript 문법 지원
    sourceType: "module", // ES 모듈(import/export) 구문 지원
  },
  settings: {
    react: {
      version: "detect", // React 버전 자동 감지 설정 (설치된 React 버전을 기반으로 하여 최적 규칙 적용)
    },
  },
};
