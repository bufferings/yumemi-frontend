import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { PrefectureSelection } from 'src/types';

type Props = {
  prefectureSelections: PrefectureSelection[];
  onToggleSelection: (prefCode: number) => void;
};

type PrefectureLabelProps = {
  selected: boolean;
};

const PrefectureLabel = styled.label<PrefectureLabelProps>(
  ({ selected, theme }) => css`
    grid-template-columns: 24px auto;
    display: grid;
    align-items: center;
    padding-left: 4px;

    border-radius: 4px;
    height: 28px;
    vertical-align: center;

    background-color: ${selected ? theme.colors.surface2 : 'inherit'};

    :hover {
      background-color: ${theme.colors.surface1};
    }
  `,
);

const PrefectureList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 1px;
`;

const PrefectureName = styled.span(
  ({ theme }) => css`
    ${theme.fonts.bodyL};
  `,
);

export const PrefectureSelector = ({ prefectureSelections, onToggleSelection }: Props) => (
  <PrefectureList>
    {prefectureSelections.map((it) => (
      <PrefectureLabel key={it.prefCode} htmlFor={`checkbox_${it.prefCode}`} selected={it.selected}>
        <input
          type="checkbox"
          id={`checkbox_${it.prefCode}`}
          checked={it.selected}
          onChange={() => onToggleSelection(it.prefCode)}
        />
        <PrefectureName>{it.prefName}</PrefectureName>
      </PrefectureLabel>
    ))}
  </PrefectureList>
);
