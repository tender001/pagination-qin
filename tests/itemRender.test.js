import { mount } from 'enzyme';
import Pagination from '../src';

describe('itemRender', () => {
  let wrapper;
  const currentPage = 12;
  const itemRender = (current) => <a href={`#${current}`}>{current}</a>;

  beforeEach(() => {
    wrapper = mount(
      <Pagination total={1000} current={currentPage} itemRender={itemRender} />,
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should support custom itemRender', () => {
    const prev = wrapper.find('.pagination-qin-prev');
    const next = wrapper.find('.pagination-qin-next');
    const jumpPrev = wrapper.find('.pagination-qin-jump-prev');
    const jumpNext = wrapper.find('.pagination-qin-jump-next');
    const active = wrapper.find('.pagination-qin-item-active');

    expect(prev.getDOMNode().innerHTML).toBe(
      `<a href="#${currentPage - 1}">${currentPage - 1}</a>`,
    );
    expect(next.getDOMNode().innerHTML).toBe(
      `<a href="#${currentPage + 1}">${currentPage + 1}</a>`,
    );
    expect(jumpPrev.getDOMNode().innerHTML).toBe(
      `<a href="#${currentPage - 5}">${currentPage - 5}</a>`,
    );
    expect(jumpNext.getDOMNode().innerHTML).toBe(
      `<a href="#${currentPage + 5}">${currentPage + 5}</a>`,
    );
    expect(active.getDOMNode().innerHTML).toBe(
      `<a href="#${currentPage}">${currentPage}</a>`,
    );
  });

  it('should support pass disabled to prev and next buttons', () => {
    const component = mount(
      <Pagination total={1000} current={1} itemRender={itemRender} />,
    );
    const prev = component.find('.pagination-qin-prev');
    const next = component.find('.pagination-qin-next');
    expect(prev.getDOMNode().innerHTML).toBe('<a href="#0" disabled="">0</a>');
    expect(next.getDOMNode().innerHTML).toBe('<a href="#2">2</a>');
  });
});
