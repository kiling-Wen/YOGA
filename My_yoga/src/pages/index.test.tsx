import IndexPage from './index';

describe('IndexPage', () => {
  it('answers who you are', () => {
    const page: any = IndexPage();
    const header =
      Array.isArray(page.props.children) && page.props.children.length > 0
        ? page.props.children.find((child: any) => child?.type === 'h1') ||
          page.props.children[0]
        : page.props.children;

    expect(header?.props?.children).toBe('你好，我是 YOGA。');
  });
});
